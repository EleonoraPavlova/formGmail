import { ref } from "vue";

export default function useAlert() {
  const alert = ref(false)

  const toggle = () => (alert.value = !alert.value);
  const close = () => (alert.value = false);
  return { alert, close, toggle }
  // или вернуть можно картеж:   return [alert, toggle, close]
}