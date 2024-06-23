const setModalState = (
  btn: HTMLElement | null,
  menu: HTMLElement | null,
  activate: boolean,
): void => {
  const action = activate ? "add" : "remove"

  btn?.classList[action]("active")
  menu?.classList[action]("active")
}

const burger = document.querySelector("[data-burger]") as HTMLElement | null
const menu = document.querySelector("[data-menu]") as HTMLElement | null
const menuLinks = menu?.querySelectorAll("[data-menu-link]")

burger?.addEventListener("click", ({ currentTarget }) => {
  const target = currentTarget as HTMLElement | null
  const isActiveMenu = target?.classList?.contains("active")

  setModalState(target, menu, !isActiveMenu)
})

menuLinks?.forEach(link => {
  link.addEventListener("click", () => {
    setModalState(burger, menu, false)
  })
})
