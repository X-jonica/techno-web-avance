<template>
    <div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="mt-6 text-center text-2xl sm:text-3xl font-extrabold text-gray-900">
                Créez votre compte
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
                Déjà membre?
                <router-link
                    to="/connexion"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                >
                    Connectez-vous ici
                </router-link>
            </p>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form class="space-y-6" @submit.prevent="handleSubmit">
                    <div>
                        <label for="nom" class="block text-sm font-medium text-gray-700">
                            Nom complet
                        </label>
                        <div class="mt-1">
                            <input
                                id="nom"
                                name="nom"
                                type="text"
                                required
                                v-model="user.nom"
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>

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
                                v-model="user.email"
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
                                autocomplete="new-password"
                                required
                                v-model="user.mot_de_passe"
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            class="w-full flex items-center justify-center py-2 px-4 border bg-[#201B21] border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            :disabled="loading"
                        >
                            <template v-if="!loading">S'inscrire</template>
                            <template v-else>
                                <svg
                                    class="animate-spin h-5 w-5 mr-2 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        class="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                Traitement...
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

                <div v-if="success" class="mt-4 p-4 bg-green-50 border-l-4 border-green-500">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <svg
                                class="h-5 w-5 text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                        <div class="ml-3">
                            <p class="text-sm text-green-700">
                                Inscription réussie! Redirection en cours...
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
        name: 'SignupView',
        setup() {
            const router = useRouter()
            const user = ref({
                nom: '',
                email: '',
                mot_de_passe: ''
            })
            const loading = ref(false)
            const error = ref('')
            const success = ref(false)

            const handleSubmit = async () => {
                loading.value = true
                error.value = ''

                try {
                    const response = await fetch(
                        'https://grieving-tonie-x-jonica-0a1c8b87.koyeb.app/api/utilisateurs/inscription',
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(user.value)
                        }
                    )

                    const data = await response.json()

                    if (!response.ok) {
                        throw new Error(data.message || "Erreur lors de l'inscription")
                    }

                    success.value = true
                    // Rediriger après 2 secondes
                    setTimeout(() => {
                        router.push('/connexion')
                    }, 2000)
                } catch (err) {
                    error.value = err.message
                } finally {
                    loading.value = false
                }
            }

            return {
                user,
                loading,
                error,
                success,
                handleSubmit
            }
        }
    }
</script>
