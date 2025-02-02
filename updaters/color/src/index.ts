import { ColorUpdater } from "./ColorUpdater";
import type { Engine } from "tsparticles-engine";

/**
 * @param engine -
 * @param refresh -
 */
export async function loadColorUpdater(engine: Engine, refresh = true): Promise<void> {
    await engine.addParticleUpdater("color", (container) => new ColorUpdater(container), refresh);
}
