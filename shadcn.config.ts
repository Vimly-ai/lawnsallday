export const config = {
  theme: {
    default: "default",
    dark: "dark",
    extend: {
      colors: {
        lawn: {
          50: "222.2 84% 98%",
          100: "222.2 84% 95%",
          200: "222.2 84% 90%",
          300: "222.2 84% 85%",
          400: "222.2 84% 80%",
          500: "222.2 84% 75%",
          600: "222.2 84% 70%",
          700: "222.2 84% 65%",
          800: "222.2 84% 60%",
          900: "222.2 84% 55%",
        },
      },
    },
  },
  components: {
    button: {
      variants: {
        size: {
          default: "h-9 rounded-md",
          sm: "h-8 rounded-md",
          lg: "h-10 rounded-md",
        },
      },
    },
  },
  aliases: {
    button: "Button",
    card: "Card",
    input: "Input",
    label: "Label",
    select: "Select",
    textarea: "Textarea",
    checkbox: "checkbox",
    radioGroup: "radio-group",
    dialog: "dialog",
    dropdownMenu: "dropdown-menu",
    navigationMenu: "navigation-menu",
    popover: "popover",
    progress: "progress",
    scrollArea: "scroll-area",
    separator: "separator",
    skeleton: "skeleton",
    switch: "switch",
    table: "table",
    tabs: "tabs",
    toast: "toast",
    tooltip: "tooltip",
  },
  styles: {
    button: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
      variant: {
        default: {
          backgroundColor: "bg-primary",
          borderColor: "border-primary",
          color: "text-primary-foreground",
        },
        secondary: {
          backgroundColor: "bg-secondary",
          borderColor: "border-secondary",
          color: "text-secondary-foreground",
        },
        destructive: {
          backgroundColor: "bg-destructive",
          borderColor: "border-destructive",
          color: "text-destructive-foreground",
        },
        outline: {
          backgroundColor: "bg-background",
          borderColor: "border-input",
          color: "text-foreground",
        },
      },
      size: {
        default: {
          padding: "px-4 py-2",
          borderRadius: "rounded-md",
        },
        sm: {
          padding: "px-3 py-1.5",
          borderRadius: "rounded-md",
        },
        lg: {
          padding: "px-5 py-2.5",
          borderRadius: "rounded-md",
        },
      },
    },
  },
}
