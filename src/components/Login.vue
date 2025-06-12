<template>
    <div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="mt-6 text-center text-2xl sm:text-3xl font-extrabold text-gray-900">
                Connectez-vous à votre compte
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
                Nouveau client?
                <router-link to="/signup" class="font-medium text-indigo-600 hover:text-indigo-500">
                    Créez un compte
                </router-link>
            </p>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form class="space-y-6" @submit.prevent="handleSubmit">
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700">
                            Adresse email
                        </label>
                        <div class="mt-1">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autocomplete="email"
                                required
                                v-model="credentials.email"
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700">
                            Mot de passe
                        </label>
                        <div class="mt-1">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autocomplete="current-password"
                                required
                                v-model="credentials.mot_de_passe"
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                v-model="rememberMe"
                                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                                Se souvenir de moi
                            </label>
                        </div>

                        <div class="text-sm">
                            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                                Mot de passe oublié?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            class="w-full flex items-center justify-center bg-[#201B21] py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            :disabled="loading"
                        >
                            <template v-if="!loading">Se connecter</template>
                            <template v-else>
                                Connexion...
                                <svg
                                    class="animate-spin ml-2 h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        class="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        stroke-width="4"
                                    ></circle>
                                    <path
                                        class="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                            </template>
                        </button>
                    </div>
                </form>

                <div v-if="error" class="mt-4 p-4 bg-red-50 border-l-4 border-red-500">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <svg
                                class="h-5 w-5 text-red-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                        <div class="ml-3">
                            <p class="text-sm text-red-700">
                                {{ error }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    export default {
        name: 'LoginView',
        setup() {
            const router = useRouter()
            const credentials = ref({
                email: '',
                mot_de_passe: ''
            })
            const rememberMe = ref(false)
            const loading = ref(false)
            const error = ref('')

            const handleSubmit = async () => {
                loading.value = true
                error.value = ''

                try {
                    const response = await fetch(
                        'https://grieving-tonie-x-jonica-0a1c8b87.koyeb.app/api/utilisateurs/connexion',
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(credentials.value)
                        }
                    )

                    const data = await response.json()

                    if (!response.ok) {
                        throw new Error(data.message || 'Email ou mot de passe incorrect')
                    }

                    // Stocker le token ou les infos utilisateur
                    if (rememberMe.value) {
                        localStorage.setItem('user', JSON.stringify(data.utilisateur))
                    } else {
                        sessionStorage.setItem('user', JSON.stringify(data.utilisateur))
                    }

                    // Récupérer le premier produit depuis l'API puis rediriger
                    const productsResponse = await fetch(
                        'https://grieving-tonie-x-jonica-0a1c8b87.koyeb.app/api/chossures'
                    )
                    const productsData = await productsResponse.json()

                    if (productsData.data && productsData.data.length > 0) {
                        router.push(`/product/${productsData.data[0].id}`)
                    } else {
                        // Si aucun produit n'est disponible, rediriger vers une autre page
                        // router.push('/')
                        alert('Aucune produit n est disponible pour le moment !')
                    }
                } catch (err) {
                    error.value = err.message
                } finally {
                    loading.value = false
                }
            }

            // Il faut retourner toutes les variables et méthodes que vous voulez utiliser dans le template
            return {
                credentials,
                rememberMe,
                loading,
                error,
                handleSubmit
            }
        }
    }
</script>
