import React from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

export class BackgroundParticles extends React.PureComponent<any> {
  // this customizes the component tsParticles installation
  async customInit(engine: Engine): Promise<void> {
    // this adds the preset to tsParticles, you can safely use the
    await loadStarsPreset(engine);
  }

  render() {
    const options = {
      preset: "stars",
      // set the background color to transparent
      background: {
        color: {
          value: "transparent",
        },
      },
    };

    return <Particles options={options} init={this.customInit} />;
  }
}
