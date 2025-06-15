export type ButtonProps = {
  className?: string;
  size?: 'default' | 'sm' | 'lg';
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'link';
};

export type CardProps = {
  className?: string;
};

export type InputProps = {
  className?: string;
};

export type LabelProps = {
  className?: string;
};

export type SelectProps = {
  className?: string;
};

export type TextareaProps = {
  className?: string;
};

export type Config = {
  theme: {
    extend: {
      colors: {
        lawn: {
          50: string;
          100: string;
          200: string;
          300: string;
          400: string;
          500: string;
          600: string;
          700: string;
          800: string;
          900: string;
        };
      };
    };
  };
  components: {
    button: {
      variants: {
        size: {
          default: string;
          sm: string;
          lg: string;
        };
      };
    };
  };
  aliases: {
    button: string;
    card: string;
    input: string;
    label: string;
    select: string;
    textarea: string;
  };
  styles: {
    button: {
      default: string;
      secondary: string;
      outline: string;
      ghost: string;
      link: string;
    };
    input: {
      default: string;
    };
    select: {
      default: string;
    };
    textarea: {
      default: string;
    };
    label: {
      default: string;
    };
  };
};
