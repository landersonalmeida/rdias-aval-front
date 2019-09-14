<template>
    <div class="rdias-content z-depth-5">
        <h4 style="padding: 0 .2em">Cadastrar usuário</h4>

        <div class="row">
            <form v-on:submit.prevent="onSubmit" class="col s12">
                <div class="row">
                    <div class="input-field col s6">
                        <input
                            v-validate="'required|min:14'"
                            v-mask="['###.###.###-##']"
                            v-model="datas.CPF"
                            name="CPF"
                            :class="{'invalid': errors.has('CPF')}"
                            id="cpf" type="text">
                        <label for="cpf">CPF<strong class="red-text">*</strong></label>
                        <span class="helper-text" :data-error="errors.first('CPF')"></span>
                    </div>
                    <div class="input-field col s6">
                        <input
                            v-validate="'required|alpha_spaces'"
                            v-model="datas.nome"
                            name="nome"
                            :class="{'invalid': errors.has('nome')}"
                            id="nome" type="text">
                        <label for="nome">Nome<strong class="red-text">*</strong></label>
                        <span class="helper-text" :data-error="errors.first('nome')"></span>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6">
                        <input v-mask="['(##) ####-####', '(##) #####-####']" v-model="datas.telefone" id="ddd_telefone" type="text" class="validate">
                        <label for="ddd_telefone">Telefone</label>
                    </div>
                    <div class="input-field col s6">
                        <input
                            v-validate="'required|email'"
                            v-model="datas.email"
                            name="email"
                            :class="{'invalid': errors.has('email')}"
                            id="email" type="text">
                        <label for="email">E-mail<strong class="red-text">*</strong></label>
                        <span class="helper-text" :data-error="errors.first('email')"></span>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input v-model="datas.endereco" id="endereco" type="text" class="validate">
                        <label for="endereco">Endereço</label>
                    </div>
                </div>

                <div class="row">
                    <div class="col s6">
                        <button class="btn waves-effect indigo darken-4" type="submit" name="action">Cadastrar usuário</button>
                        <router-link :to="{ name: 'Index' }" tag="button" name="action" class="btn waves-effect grey">Cancelar</router-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Editar',
    data: () => ({
        datas: {
            CPF: null,
            nome: null,
            telefone: null,
            email: null,
            endereco: null
        }
    }),
    methods: {
        onSubmit () {
            this.$validator.validate().then(result => {
                // Verifica primeiro se os dados são válidos
                if (!result) {
                    // eslint-disable-next-line
                    return M.toast({ classes: 'orange', html: 'Por favor, corrija os campos antes de continuar' })
                }

                this.$repo.get('usuario').create(this.datas).then((result) => {
                    // Notificar

                    // Redirecionando o operador de volta para a listagem de usuários
                    this.$router.push({ name: 'Index' })
                })
            })
        }
    }
}
</script>

<style lang="scss">
@import "../assets/scss/RDiasTeste";
</style>
