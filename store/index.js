import Vuex from 'vuex';
import Cookie from 'js-cookie';

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedProducts: [],
            token: null,
            userId: null,
            products: [],
            product: {},
            cartProducts: [],
            cartCount: 0,
            cartTotal: 0
        },
        mutations: {
            setProducts(state, products) {
                state.loadedProducts = products
            },
            addProduct(state, product) {
                state.loadedProducts.push(product)
            },
            editProduct(state, editedProduct) {
                const productIndex = state.loadedProducts.findIndex(
                    product => product.id === editedProduct.id
                );
                state.loadedProducts[productIndex] = editedProduct;
            },
            setToken(state, token) {
                state.token = token
            },
            clearToken(state) {
                state.token = null;
                state.userId = null;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return context.app.$axios
                    .$get('/products.json')
                    .then(data => {
                        const productsArray = []
                        for (const key in data) {
                            productsArray.push({...data[key], id: key })
                        }
                        vuexContext.commit('setProducts', productsArray);
                    })
                    .catch(e => context.error(e));
            },
            addProduct(vuexContext, product) {
                const createdProduct = {
                    ...product,
                    updatedDate: new Date()
                }
                return this.$axios.$post('https://nuxt-project-67c7c.firebaseio.com/products.json?auth=' + vuexContext.state.token, createdProduct)
                    .then(data => {
                        vuexContext.commit('addProduct', {...createdProduct, id: data.name })
                    })
                    .catch(e => console.log(e));
            },
            editProduct(vuexContext, editedProduct) {
                return this.$axios.$put('https://nuxt-project-67c7c.firebaseio.com/products/' +
                        editedProduct.id +
                        '.json?auth=' + vuexContext.state.token, editedProduct)
                    .then(res => {
                        vuexContext.commit('editProduct', editedProduct)
                    })
                    .catch(e => console.log(e))
            },
            deleteProduct({ commit, state }, productId) {
                return this.$axios.$delete(`products/${productId}.json?auth=${state.token}`)
                    .then(res => {
                        alert('product deleted, id' + productId)
                        const products = state.loadedProducts.filter(product => {
                            return product.id !== productId
                        })
                        console.log('pro', products)
                        commit('setProducts', products)
                        this.$router.push('/products');
                    })
                    .catch(error => console.log(error))
            },
            setProducts(vuexContext, products) {
                vuexContext.commit('setProducts', products);
            },
            authenticateUser(vuexContext, authData) {
                let authUrl =
                    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
                    process.env.fbAPIKey;
                if (!authData.isLogin) {
                    authUrl =
                        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
                        process.env.fbAPIKey;
                }
                return this.$axios.$post(authUrl, {
                        email: authData.email,
                        password: authData.password,
                        returnSecureToken: true
                    })
                    .then(result => {
                        vuexContext.commit('setToken', result.idToken);
                        localStorage.setItem('token', result.idToken);
                        localStorage.setItem('tokenExpiration', new Date().getTime() + Number.parseInt(result.expiresIn) * 1000);

                        Cookie.set('jwt', result.idToken);
                        Cookie.set('expirationDate', new Date().getTime() + Number.parseInt(result.expiresIn) * 1000);
                        return this.$axios.$post('http://localhost:3000/api/track-data', { data: 'Authenticated!' })
                    })
                    .catch(e => console.log(e));
            },
            initAuth(vuexContext, req) {
                let token;
                let expirationDate;
                if (req) {
                    if (!req.headers.cookie) {
                        return;
                    }
                    const jwtCookie = req.headers.cookie
                        .split(';')
                        .find(c => c.trim().startsWith('jwt='));
                    if (!jwtCookie) {
                        return;
                    }
                    token = jwtCookie.split('=')[1];
                    expirationDate = req.headers.cookie
                        .split(';')
                        .find(c => c.trim().startsWith('expirationDate='))
                        .split('=')[1];
                } else {
                    token = localStorage.getItem('token');
                    expirationDate = localStorage.getItem('tokenExpiration');
                }
                if (new Date().getTime() > +expirationDate || !token) {
                    console.log('No token or invalid token');
                    vuexContext.dispatch('logout');
                    return;
                }
                vuexContext.commit('setToken', token);
            },
            logout(vuexContext) {
                vuexContext.commit('clearToken');
                Cookie.remove('jwt');
                Cookie.remove('expirationDate');
                if (process.client) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('tokenExpiration');
                }
            },
            addCart({ commit, state }, product) {
                const found = state.cartProducts.find(
                    (item) => item.id === product.id
                )

                if (found) {
                    found.quantity++
                        state.cartTotal += parseInt(product.price)
                } else {
                    product.quantity = 1
                    state.cartProducts.push(product)
                    state.cartTotal += parseInt(product.price)
                    state.cartCount++
                }
            },
            removeFromCart({ commit, state }, product) {
                const index = state.cartProducts.indexOf(product)

                if (index > -1) {
                    const item = state.cartProducts[index]
                    state.cartCount -= item.quantity
                    state.cartTotal -= product.quantity * product.price

                    state.cartProducts.splice(index, 1)
                }
            },
            decreaseQuantity({ commit, state }, product) {
                const addedproduct = state.cartProducts.find(
                    (item) => item.id === product.id
                )

                if (addedproduct) {
                    addedproduct.quantity--
                        state.cartTotal -= parseInt(addedproduct.price)
                }
            },
        },
        getters: {
            loadedProducts(state) {
                return state.loadedProducts;
            },
            isAuthenticated(state) {
                return state.token != null
            },
            cartProducts(state) {
                return state.cartProducts
            }
        }
    });
};

export default createStore;