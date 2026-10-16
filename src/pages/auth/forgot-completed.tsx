import { Finally } from "../../components/finally"

export function ForgotCompleted() {
    return <Finally
                title="Redefinição enviada!"
                subtitle={
                    <>
                        Boa, agora é só checar o e-mail que foi enviado para você<br />
                        redefinir sua senha e aproveitar os estudos.
                    </>
                }
                titleButton="Voltar ao login"
                path="/sign-in"
            />
}