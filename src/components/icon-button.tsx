import { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<'button'> {
  transparent?: boolean // ? deixa ele opcional
}

export function IconButton({ transparent, ...props }: IconButtonProps) {
  return (
    <button 
      {...props} 
      className={transparent 
        ? "bg-black/20 border border-white/10 rounded-md p-1.5" 
        : "bg-white/10 border border-white/10 rounded-md p-1.5" 
      } 
    />  // children ja vem dentro das props, então não preciso repassar como conteúdo
  );
};