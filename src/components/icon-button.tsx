import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<'button'> {
  transparent?: boolean // ? deixa ele opcional
}

export function IconButton({ transparent, ...props }: IconButtonProps) {
  return (
    <button 
      {...props} 
      className={twMerge(
        "border border-white/10 rounded-md p-1.5", // classes fixas
        transparent ? "bg-black/20" : "bg-white/10", // condicional para mudar o fundo do botão
        props.disabled ? "opacity-50" : null // para botão ficar com opacidade quando estiver desabilitado
      )}
    />  // children ja vem dentro das props, então não preciso repassar como conteúdo
  );
};