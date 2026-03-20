import { useState } from 'react';

export function useCalculadora() {
  const[valorVisor, setValorVisor] = useState('0');
  const [operador, setOperador] = useState<string | null>(null);
  const [valorAnterior, setValorAnterior] = useState<string | null>(null);

  const calculateResult = () => {
    if (!operador || !valorAnterior) return;

    const prev = parseFloat(valorAnterior.replace(',', '.'));
    const current = parseFloat(valorVisor.replace(',', '.'));
    let result = 0;

    switch (operador) {
      case '+': result = prev + current; break;
      case '-': result = prev - current; break;
      case 'X': result = prev * current; break;
      case '/': result = current !== 0 ? prev / current : 0; break;
      case 'x^y': result = Math.pow(prev, current); break;
    }

    setValorVisor(String(result).replace('.', ','));
    setOperador(null);
    setValorAnterior(null);
  };

  const handlePress = (value: string) => {
    if (value === 'C') {
      setValorVisor('0');
      setOperador(null);
      setValorAnterior(null);
      return;
    }

    if (value === '<') {
      setValorVisor(prev => (prev.length > 1 ? prev.slice(0, -1) : '0'));
      return;
    }

    if (['+', '-', 'X', '/', 'x^y'].includes(value)) {
      setOperador(value);
      setValorAnterior(valorVisor);
      setValorVisor('0');
      return;
    }

    if (value === '=') {
      calculateResult();
      return;
    }

    if (value === ',') {
      if (!valorVisor.includes(',')) setValorVisor(valorVisor + ',');
      return;
    }

    setValorVisor(prev => (prev === '0' ? value : prev + value));
  };

  const expressao = valorAnterior && operador ? `${valorAnterior} ${operador}` : '';

  return {
    valorVisor,
    expressao,
    handlePress,
  };
}