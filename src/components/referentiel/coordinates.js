const G = 1
const V0 = 20

const Vperso = 15

const Vcloud = 1
export const getCloudCoord = time => {
  return { x: Vcloud * time, y: 0 }
}
export const getPersoCoord = time => {
  return { x: Math.max(0, Vperso * (time - 2)), y: 0 }
}
export const getBulletCoord = time => {
  return {
    x: V0 * Math.sqrt(0.5) * time,
    y: G * time * time - V0 * Math.sqrt(0.5) * time,
  }
}
export const getCanonCoord = time => {
  return { x: -30 * (1 - Math.exp(-time / 3)), y: 0 }
}
export const getFloorCoord = time => ({ x: 0, y: 0 })
