import PythonLogo from "../logos/skills/python-logo";
import CLogo from "../logos/skills/c-logo";
import CppLogo from "../logos/skills/cpp-logo";
import ArduinoLogo from "../logos/skills/arduino-logo";
import RaspberryPiLogo from "../logos/skills/raspberry-pi-logo";
import EspressifLogo from "../logos/skills/espressif-logo";
import ProjectMedia from "../project-media";
import SkillBadge from "../skill-badge";
import { AutoVideo } from "../ui/auto-video";
import { ExpandableCard } from "../ui/expandable-card";
import CardHeading from "./card-heading";

function EmbeddedDetails() {
  return (
    <div className="space-y-4">
      <p>
        My first-year engineering design class sparked my interest in embedded.
        The final project was to make a{" "}
        <a
          href="https://github.com/themaxboucher/delivery-robot"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Raspberry Pi controlled robot
        </a>{" "}
        that delivered a payload through a maze. Seeing what was possible with a
        cheap microcontroller, a few components, and some 3D printing, I wanted
        to try building a drone.
      </p>
      <p>
        I followed a YouTube guide for the{" "}
        <a
          href="https://github.com/themaxboucher/esp-drone"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          “smallest possible drone”
        </a>
        . Now I’m planning on building my own version with brushless motors and
        a custom flight controller.
      </p>
      <p>
        I've also worked on a{" "}
        <a
          href="https://github.com/themaxboucher/robot-hand"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          robotic hand
        </a>{" "}
        controlled by computer vision. A Python script using Google's MediaPipe
        tracks your hand through the webcam and sends joint positions over
        serial to an Arduino to drives the servos. This also pushed me to design
        my{" "}
        <a
          href="https://github.com/themaxboucher/robot-hand-pcb"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          first custom PCB
        </a>{" "}
        to wire the servos to power and the Arduino.
      </p>
    </div>
  );
}

export default function EmbeddedCard() {
  return (
    <ExpandableCard
      id="embedded"
      dialogMediaClassName="aspect-[16/10]"
      orientation="header-first"
      header={
        <CardHeading
          title="Embedded"
          description="Built a mini drone and a robot hand."
          logos={
            <>
              <SkillBadge icon={<PythonLogo />} color="#0472B5" name="Python" />
              <SkillBadge icon={<CLogo />} color="#6193C8" name="C" />
              <SkillBadge icon={<CppLogo />} color="#5987B4" name="C++" />
              <SkillBadge
                icon={<ArduinoLogo />}
                color="#00979D"
                name="Arduino"
              />
              <SkillBadge
                icon={<RaspberryPiLogo />}
                color="#BD1143"
                name="Raspberry Pi"
              />
              <SkillBadge
                icon={<EspressifLogo />}
                color="#E7352C"
                name="ESP32"
              />
            </>
          }
        />
      }
      media={
        <div className="grid w-full grid-cols-5 grid-rows-2 gap-2.5">
          <ProjectMedia
            media={
              <AutoVideo
                src="/videos/delivery-robot.mp4"
                className="rounded-xl"
              />
            }
            link="https://github.com/themaxboucher/delivery-robot"
          />
          <ProjectMedia
            media={
              <AutoVideo src="/videos/soldering.mp4" className="rounded-xl" />
            }
            link="https://github.com/themaxboucher/esp-drone"
            className="col-span-2 col-start-2 col-end-4"
          />
          <ProjectMedia
            media={<AutoVideo src="/videos/drone.mp4" className="rounded-xl" />}
            link="https://github.com/themaxboucher/esp-drone"
            className="row-start-2 col-span-3"
          />
          <ProjectMedia
            media={
              <AutoVideo src="/videos/robot-hand.mp4" className="rounded-xl" />
            }
            link="https://github.com/themaxboucher/robot-hand"
            className="col-start-4 col-span-2 row-span-2"
          />
        </div>
      }
      details={<EmbeddedDetails />}
    />
  );
}
