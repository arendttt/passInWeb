// lista de participantes fake com  200 registros

import { faker } from "@faker-js/faker";

export const attendees = Array.from({ length: 212 }).map(() => {
  return {
    id: faker.number.int({ min: 10000, max: 20000 }), // gera números aleatórios entre 10 mil e 20 mil
    name: faker.person.fullName(),
    email: faker.internet.email().toLocaleLowerCase(),
    createdAt: faker.date.recent({ days: 30 }), // gera datas aleatórias em um intervalo de 30 dias antes da data atual
    checkedInAt: faker.date.recent({ days: 7 })
  }
})