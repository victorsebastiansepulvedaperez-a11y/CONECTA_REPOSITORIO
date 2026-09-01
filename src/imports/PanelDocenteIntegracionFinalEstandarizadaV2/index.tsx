import svgPaths from "./svg-nsbv1bq417";
import imgImageBorder from "./52c7dddcdc80ea7928f56843a339b684ddf54bf7.png";
import imgImageBorder1 from "./2ea9097a66c8ef263ddb34d42beb160bbca1f216.png";
import imgImageBorder2 from "./28798cfbadbadfd58f22adcc131cff60818b3235.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[32px] whitespace-nowrap">
        <p className="leading-[40px]">Hola, Prof. Omar Lobos</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Tutor 7° Año Básico A • Gestión del día</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[12px] relative shrink-0 w-[24px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 24 12" width="24">
        <g id="Container">
          <path d={svgPaths.p23d26800} fill="#CFBDFF" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cfbdff] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">32 Estudiantes</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(32,31,36,0.4)] relative rounded-[12px] self-stretch shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(207,189,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[11.99px] items-center justify-center px-[25px] py-[11px] relative size-full">
          <Container3 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <OverlayBorderOverlayBlur />
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Header Section">
      <Container />
      <Container2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#cfbdff] text-[10px] tracking-[0.5px] uppercase w-full">
          <p className="leading-[15px]">CHECK-INS HOY</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-baseline justify-between relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[40px] whitespace-nowrap">
          <p className="leading-[48px]">23</p>
        </div>
        <div className="h-[15px] relative shrink-0 w-[30px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 30 15" width="30">
            <path d={svgPaths.p1d03b200} fill="#CFBDFF" fillOpacity="0.4" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CheckInsHoy() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(207,189,255,0.05)] flex-[1_0_0] min-h-[100px] min-w-px relative rounded-[16px]" data-name="Check-ins Hoy">
      <div aria-hidden className="absolute border border-[rgba(207,189,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start justify-between min-h-[inherit] p-[21px] relative size-full">
        <Container6 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e7c365] text-[10px] tracking-[0.5px] uppercase w-full">
          <p className="leading-[15px]">CLIMA POSITIVO</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-baseline justify-between relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[40px] whitespace-nowrap">
          <p className="leading-[48px]">74%</p>
        </div>
        <div className="h-[15px] relative shrink-0 w-[25px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 25 15" width="25">
            <path d={svgPaths.p1430df00} fill="#E7C365" fillOpacity="0.4" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ClimaPositivo() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(231,195,101,0.05)] flex-[1_0_0] min-h-[100px] min-w-px relative rounded-[16px]" data-name="Clima Positivo">
      <div aria-hidden className="absolute border border-[rgba(231,195,101,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start justify-between min-h-[inherit] p-[21px] relative size-full">
        <Container7 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#cdc0e8] text-[10px] tracking-[0.5px] uppercase w-full">
          <p className="leading-[15px]">ESTA SEMANA</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-baseline justify-between relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[40px] whitespace-nowrap">
          <p className="leading-[48px]">89</p>
        </div>
        <div className="h-[25px] relative shrink-0 w-[22.5px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="25" preserveAspectRatio="none" viewBox="0 0 22.5 25" width="22.5">
            <path d={svgPaths.p9a5f800} fill="#CDC0E8" fillOpacity="0.4" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function EstaSemana() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(205,192,232,0.05)] flex-[1_0_0] min-h-[100px] min-w-px relative rounded-[16px]" data-name="Esta Semana">
      <div aria-hidden className="absolute border border-[rgba(205,192,232,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start justify-between min-h-[inherit] p-[21px] relative size-full">
        <Container8 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e9ddff] text-[10px] tracking-[0.5px] uppercase w-full">
          <p className="leading-[15px]">MEDALLAS DADAS</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-baseline justify-between relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[40px] whitespace-nowrap">
          <p className="leading-[48px]">24</p>
        </div>
        <div className="h-[26.25px] relative shrink-0 w-[20px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="26.25" preserveAspectRatio="none" viewBox="0 0 20 26.25" width="20">
            <path d={svgPaths.p3e394700} fill="#E9DDFF" fillOpacity="0.4" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MedallasDadas() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(233,221,255,0.05)] flex-[1_0_0] min-h-[100px] min-w-px relative rounded-[16px]" data-name="Medallas Dadas">
      <div aria-hidden className="absolute border border-[rgba(233,221,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start justify-between min-h-[inherit] p-[21px] relative size-full">
        <Container9 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <CheckInsHoy />
      <ClimaPositivo />
      <EstaSemana />
      <MedallasDadas />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[17px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 22 17" width="22">
        <g id="Container">
          <path d={svgPaths.paad5c90} fill="#CFBDFF" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#cfbdff] text-[16px] whitespace-nowrap">
          <p>
            <span className="leading-[24px]">Temperatura Emocional:</span>
            <span className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[#cbc4d2]">{` El curso muestra un clima mayormente positivo hoy (74%).`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(207,189,255,0.05)] relative rounded-[8px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(207,189,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[17px] relative size-full">
          <Container10 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Section1StatsAndEmotionalTemperature() {
  return (
    <div className="col-[1/span_12] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Section - 1. Stats and Emotional Temperature">
      <Container5 />
      <OverlayBorderOverlayBlur1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#cfbdff] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Resumen Anual Emociones</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Tendencias emocionales 2024</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading2 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[16px] text-right tracking-[1.6px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">BIENESTAR PROMEDIO</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[4.5px] items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#cfbdff] text-[40px] text-right whitespace-nowrap">
        <p className="leading-[40px]">82%</p>
      </div>
      <Container16 />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container13 />
        <Container15 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[40.42%] right-[40.41%] top-[-24px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Mar</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(207,189,255,0.1)] flex-[1_0_0] h-[86.39px] min-w-[40px] relative rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay">
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[41.26%] right-[41.25%] top-[-24px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Abr</p>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(207,189,255,0.2)] flex-[1_0_0] h-[108px] min-w-[40px] relative rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay">
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[39.53%] right-[39.53%] top-[-24px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">May</p>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(207,189,255,0.4)] flex-[1_0_0] h-[57.59px] min-w-[40px] relative rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay">
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[40.88%] right-[40.88%] top-[-24px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Jun</p>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(207,189,255,0.2)] flex-[1_0_0] h-[93.59px] min-w-[40px] relative rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay">
      <Container21 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[39.74%] right-[39.75%] top-[-24px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#cfbdff] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Ago</p>
      </div>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(207,189,255,0.6)] flex-[1_0_0] h-[129.59px] min-w-[40px] relative rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay">
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[40.44%] right-[40.43%] top-[-24px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Sep</p>
      </div>
    </div>
  );
}

function Overlay5() {
  return (
    <div className="bg-[rgba(207,189,255,0.4)] flex-[1_0_0] h-[115.19px] min-w-[40px] relative rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay">
      <Container23 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[41.02%] right-[41%] top-[-24px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#cfbdff] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Oct</p>
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#cfbdff] drop-shadow-[0px_0px_4px_rgba(207,189,255,0.5)] flex-[1_0_0] h-[136.8px] min-w-[40px] relative rounded-tl-[4px] rounded-tr-[4px]" data-name="Background+Shadow">
      <Container24 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[160px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end overflow-auto rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between pb-[16px] pr-[0.01px] relative size-full">
          <Overlay />
          <Overlay1 />
          <Overlay2 />
          <Overlay3 />
          <Overlay4 />
          <Overlay5 />
          <BackgroundShadow />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[32px]">😊</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">54%</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-[168.16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[32px]">🤔</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">22%</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-[168.17px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[32px]">😴</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">18%</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-[168.16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[32px]">😤</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">6%</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-[168.17px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container35 />
        <Container36 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(73,69,81,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start justify-center pt-[25px] relative size-full">
        <Container25 />
        <Container28 />
        <Container31 />
        <Container34 />
      </div>
    </div>
  );
}

function Section2AnnualSummary() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(32,31,36,0.4)] col-[1/span_8] justify-self-stretch relative rounded-[24px] row-2 self-start shrink-0" data-name="Section - 2. Annual Summary">
      <div aria-hidden className="absolute border border-[rgba(207,189,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[33px] relative size-full">
        <Container12 />
        <Container17 />
        <HorizontalBorder />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[21px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 16 21" width="16">
        <g id="Container">
          <path d={svgPaths.p6a7d700} fill="#E7C365" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Alumnos Premiados</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center relative size-full">
        <Container38 />
        <Heading3 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Sofía Henríquez</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e7c365] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Colaboración Proactiva</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container41 />
        <Container42 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">🏆</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="flex-[1_0_0] min-w-[15.5600004196167px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end min-w-[inherit] pl-[46px] relative size-full">
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#2b292f] relative rounded-[16px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(231,195,101,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[13px] relative size-full">
          <div className="bg-size-[35.999999046325684px_64.34999829530716px] bg-top-left relative rounded-[12px] shrink-0 size-[40px]" style={{ backgroundImage: `url("${imgImageBorder}")` }} data-name="Image+Border">
            <div aria-hidden className="absolute border-2 border-[#e7c365] border-solid inset-0 pointer-events-none rounded-[12px]" />
          </div>
          <Container40 />
          <Margin />
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Francisco Arancibia</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Kudo: Mentoría</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container45 />
        <Container46 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['FreeSans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">⭐</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="flex-[1_0_0] min-w-[13.40999984741211px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end min-w-[inherit] pl-[54.625px] relative size-full">
          <Container47 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#2b292f] relative rounded-[16px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(73,69,81,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[13px] relative size-full">
          <div className="bg-size-[66.06451731920242px_35.95347881317139px] bg-top-left relative rounded-[12px] shrink-0 size-[40px]" style={{ backgroundImage: `url("${imgImageBorder1}")` }} data-name="Image+Border">
            <div aria-hidden className="absolute border-2 border-[rgba(73,69,81,0.4)] border-solid inset-0 pointer-events-none rounded-[12px]" />
          </div>
          <Container44 />
          <Margin1 />
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Diego Velásquez</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Constancia</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container49 />
        <Container50 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">🎖️</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="flex-[1_0_0] min-w-[15.5600004196167px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end min-w-[inherit] pl-[75.078px] relative size-full">
          <Container51 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#2b292f] relative rounded-[16px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(73,69,81,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[13px] relative size-full">
          <div className="bg-size-[66.06451606750488px_36.03519058227539px] bg-top-left relative rounded-[12px] shrink-0 size-[40px]" style={{ backgroundImage: `url("${imgImageBorder2}")` }} data-name="Image+Border">
            <div aria-hidden className="absolute border-2 border-[rgba(73,69,81,0.4)] border-solid inset-0 pointer-events-none rounded-[12px]" />
          </div>
          <Container48 />
          <Margin2 />
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <BackgroundBorder />
        <BackgroundBorder1 />
        <BackgroundBorder2 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(231,195,101,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-px py-[11px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e7c365] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">Ver Cuadro de Honor</p>
        </div>
      </div>
    </div>
  );
}

function Section3AwardedStudents() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(32,31,36,0.4)] col-[9/span_4] justify-self-stretch relative rounded-[24px] row-2 self-start shrink-0" data-name="Section - 3. Awarded Students">
      <div aria-hidden className="absolute border border-[rgba(207,189,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[34px] pt-[33px] px-[33px] relative size-full">
        <Container37 />
        <Container39 />
        <Button />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[17px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 22 17" width="22">
        <g id="Container">
          <path d={svgPaths.paad5c90} fill="#CFBDFF" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Recomendaciones Basadas en Datos</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container53 />
        <Heading4 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p20f47640} fill="#4ADE80" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Clima positivo</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container56 />
        <Container57 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[14px] w-full">
          <p className="leading-[20px] mb-0">74% del curso muestra emociones</p>
          <p className="leading-[20px]">positivas. Sigue así.</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(43,41,47,0.6)] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(73,69,81,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[37px] pt-[17px] px-[17px] relative size-full">
        <Container55 />
        <Container58 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.pf427b00} fill="#E7C365" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Más logros</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container60 />
        <Container61 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[14px] w-full">
          <p className="leading-[20px] mb-0">Considera otorgar</p>
          <p className="leading-[20px] mb-0">reconocimientos por pequeños</p>
          <p className="leading-[20px]">logros diarios.</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[rgba(43,41,47,0.6)] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(73,69,81,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[17px] relative size-full">
        <Container59 />
        <Container62 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 22 16" width="22">
        <g id="Container">
          <path d={svgPaths.p39955c80} fill="#CFBDFF" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Atención individual</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container64 />
        <Container65 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[14px] w-full">
          <p className="leading-[20px] mb-0">6 alumnos requieren atención.</p>
          <p className="leading-[20px]">Considera un check-in personal.</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="bg-[rgba(43,41,47,0.6)] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(73,69,81,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[37px] pt-[17px] px-[17px] relative size-full">
        <Container63 />
        <Container66 />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[13px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 20 13" width="20">
        <g id="Container">
          <path d={svgPaths.pa9e6b00} fill="#CDC0E8" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Seguimiento</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container68 />
        <Container69 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[14px] w-full">
          <p className="leading-[20px] mb-0">Revisa tendencias para identificar</p>
          <p className="leading-[20px]">patrones y ajustar estrategias.</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="bg-[rgba(43,41,47,0.6)] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(73,69,81,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[37px] pt-[17px] px-[17px] relative size-full">
        <Container67 />
        <Container70 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start justify-center relative size-full">
        <OverlayBorder />
        <OverlayBorder1 />
        <OverlayBorder2 />
        <OverlayBorder3 />
      </div>
    </div>
  );
}

function Section4DataBasedRecommendations() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(32,31,36,0.4)] col-[1/span_12] justify-self-stretch relative rounded-[24px] row-3 self-start shrink-0" data-name="Section - 4. Data Based Recommendations">
      <div aria-hidden className="absolute border border-[rgba(207,189,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[33px] relative size-full">
        <Container52 />
        <Container54 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute h-[85.167px] right-[-23px] top-[-23px] w-[83.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="85.1667" preserveAspectRatio="none" viewBox="0 0 83.3333 85.1667" width="83.3333">
        <g id="Container" opacity="0.1">
          <path d={svgPaths.p17d184e0} fill="#E7C365" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 20 19" width="20">
        <g id="Container">
          <path d={svgPaths.p1f93f980} fill="#E7C365" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay6() {
  return (
    <div className="bg-[rgba(231,195,101,0.2)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Overlay">
      <Container74 />
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 9.33333 11.6667" width="9.33333">
        <g id="Container">
          <path d={svgPaths.pd490b00} fill="#E7C365" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e7c365] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Levanta el Ánimo</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container77 />
      <Heading5 />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Actividades para mejorar el clima grupal.</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container76 />
      <Container78 />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Overlay6 />
      <Container75 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container73 />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[14px] tracking-[0.7px] uppercase w-full">
        <p className="leading-[20px]">ACCIONES RECOMENDADAS</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[7.015px] relative shrink-0 w-[9.508px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="7.01458" preserveAspectRatio="none" viewBox="0 0 9.50833 7.01458" width="9.50833">
        <g id="Container">
          <path d={svgPaths.p25f8ca80} fill="#4ADE80" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container83() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Warm up divertido</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder4() {
  return (
    <div className="bg-[rgba(15,13,19,0.8)] content-stretch flex gap-[12px] items-center p-[13px] relative rounded-[8px] shrink-0 w-[303.66px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(73,69,81,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container82 />
      <Container83 />
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[7.015px] relative shrink-0 w-[9.508px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="7.01458" preserveAspectRatio="none" viewBox="0 0 9.50833 7.01458" width="9.50833">
        <g id="Container">
          <path d={svgPaths.p25f8ca80} fill="#4ADE80" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container85() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Juegos cooperativos</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder5() {
  return (
    <div className="bg-[rgba(15,13,19,0.8)] content-stretch flex gap-[11.99px] items-center p-[13px] relative rounded-[8px] shrink-0 w-[303.67px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(73,69,81,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container84 />
      <Container85 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <OverlayBorder4 />
      <OverlayBorder5 />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container80 />
      <Container81 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col h-[140px] items-start justify-end min-h-[82px] pt-[58px] relative shrink-0 w-full" data-name="Margin">
      <Container79 />
    </div>
  );
}

function Container72() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between relative size-full">
        <Margin3 />
        <Margin4 />
      </div>
    </div>
  );
}

function Section5InterventionStacking() {
  return (
    <div className="bg-[rgba(201,167,77,0.1)] col-[1/span_7] justify-self-stretch relative rounded-[24px] row-4 self-start shrink-0" data-name="Section - 5. Intervention Stacking">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[33px] relative size-full">
          <Container71 />
          <Container72 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(231,195,101,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Container87() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.p19e3b6c0} fill="#CFBDFF" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Videos</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center relative size-full">
        <Container87 />
        <Heading6 />
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[14px] relative shrink-0 w-[11px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 11 14" width="11">
        <g id="Container">
          <path d={svgPaths.p30eba500} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay7() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] flex-[1_0_0] min-h-px relative w-full" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container90 />
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#36343a] h-[64px] relative rounded-[8px] shrink-0 w-[96px]" data-name="Background+Border">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Overlay7 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(73,69,81,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Warm-Up: Fun Edition</p>
      </div>
    </div>
  );
}

function Overlay8() {
  return (
    <div className="bg-[rgba(207,189,255,0.1)] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[2px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#cfbdff] text-[10px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">WARM-UP</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">5 min</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Overlay8 />
      <Container94 />
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative self-stretch shrink-0" data-name="Container">
      <Container92 />
      <Container93 />
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder3 />
      <Container91 />
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[14px] relative shrink-0 w-[11px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 11 14" width="11">
        <g id="Container">
          <path d={svgPaths.p30eba500} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay9() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] flex-[1_0_0] min-h-px relative w-full" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container96 />
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#36343a] h-[64px] relative rounded-[8px] shrink-0 w-[96px]" data-name="Background+Border">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Overlay9 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(73,69,81,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Team Building</p>
      </div>
    </div>
  );
}

function Overlay10() {
  return (
    <div className="bg-[rgba(77,68,101,0.3)] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[2px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#cdc0e8] text-[10px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">EQUIPO</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">10 min</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-center relative shrink-0 w-full" data-name="Container">
      <Overlay10 />
      <Container100 />
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative self-stretch shrink-0" data-name="Container">
      <Container98 />
      <Container99 />
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder4 />
      <Container97 />
    </div>
  );
}

function Container88() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Container89 />
        <Container95 />
      </div>
    </div>
  );
}

function Section6RecommendedVideos() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(32,31,36,0.4)] col-[8/span_5] justify-self-stretch relative rounded-[24px] row-4 self-start shrink-0" data-name="Section - 6. Recommended Videos">
      <div aria-hidden className="absolute border border-[rgba(207,189,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[33px] relative size-full">
        <Container86 />
        <Container88 />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#36343a] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Lun 14 Oct</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Asistencia</p>
      </div>
      <Background />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#cfbdff] content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#371e72] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Exportar Reporte</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Heading7 />
        <Button1 />
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Sofía Henríquez</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">😊</p>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[10px] tracking-[-0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">08:05</p>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container107 />
      <Container108 />
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container105 />
      <Container106 />
    </div>
  );
}

function Container103() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <div className="relative rounded-[8px] shrink-0 size-[40px]" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
            <img alt="" className="absolute h-[179.02%] left-0 max-w-none top-[-39.51%] w-full" src={imgImageBorder} />
          </div>
        </div>
        <Container104 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(147,0,10,0.2)] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px pb-[11.5px] pt-[10.5px] px-px relative rounded-[4px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,180,171,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffb4ab] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[18px]">Falta</p>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="h-[9.333px] relative shrink-0 w-[2.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.33333" preserveAspectRatio="none" viewBox="0 0 2.33333 9.33333" width="2.33333">
        <g id="Container">
          <path d={svgPaths.p32c32280} fill="#CBC4D2" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#36343a] content-stretch flex flex-col items-center justify-center pb-[11px] pt-[9px] px-[8px] relative rounded-[4px] shrink-0" data-name="Button">
      <Container110 />
    </div>
  );
}

function Container109() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function OverlayBorder6() {
  return (
    <div className="bg-[rgba(43,41,47,0.4)] col-1 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(73,69,81,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[17px] relative size-full">
        <Container103 />
        <Container109 />
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Francisco A.</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">😴</p>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[10px] tracking-[-0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">08:12</p>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container115 />
      <Container116 />
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container113 />
      <Container114 />
    </div>
  );
}

function Container111() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <div className="relative rounded-[8px] shrink-0 size-[40px]" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
            <img alt="" className="absolute h-full left-[-41.76%] max-w-none top-0 w-[183.51%]" src={imgImageBorder1} />
          </div>
        </div>
        <Container112 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[rgba(147,0,10,0.2)] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px pb-[11.5px] pt-[10.5px] px-px relative rounded-[4px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,180,171,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffb4ab] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[18px]">Falta</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="h-[9.333px] relative shrink-0 w-[2.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.33333" preserveAspectRatio="none" viewBox="0 0 2.33333 9.33333" width="2.33333">
        <g id="Container">
          <path d={svgPaths.p32c32280} fill="#CBC4D2" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#36343a] content-stretch flex flex-col items-center justify-center pb-[11px] pt-[9px] px-[8px] relative rounded-[4px] shrink-0" data-name="Button">
      <Container118 />
    </div>
  );
}

function Container117() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Button4 />
        <Button5 />
      </div>
    </div>
  );
}

function OverlayBorder7() {
  return (
    <div className="bg-[rgba(43,41,47,0.4)] col-2 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(73,69,81,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[17px] relative size-full">
        <Container111 />
        <Container117 />
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_134px] relative size-full">
        <OverlayBorder6 />
        <OverlayBorder7 />
      </div>
    </div>
  );
}

function Section7Attendance() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(32,31,36,0.4)] col-[1/span_12] justify-self-stretch relative rounded-[24px] row-5 self-start shrink-0" data-name="Section - 7. Attendance">
      <div aria-hidden className="absolute border border-[rgba(207,189,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[33px] relative size-full">
        <Container101 />
        <Container102 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Moderación Kudos</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#6750a4] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e0d2ff] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">4 Pendientes</p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Heading8 />
        <Background1 />
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.5" preserveAspectRatio="none" viewBox="0 0 13.3333 17.5" width="13.3333">
        <g id="Container">
          <path d={svgPaths.p184c8600} fill="#CFBDFF" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[16px] whitespace-nowrap">
        <p>
          <span className="leading-[24px]">{`Francisco `}</span>
          <span className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[#cbc4d2]">para</span>
          <span className="leading-[24px]">{` Sofía`}</span>
        </p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container122 />
      <Container123 />
    </div>
  );
}

function Container120() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container121 />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[10px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">HACE 5 MIN</p>
        </div>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.625px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#cbc4d2] text-[14px] w-full">
          <p className="leading-[22.75px] mb-0">{`"Gracias por ayudarme con el ejercicio de física, realmente no lo`}</p>
          <p className="leading-[22.75px]">{`entendía hasta que me lo explicaste tú."`}</p>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[rgba(207,189,255,0.2)] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(207,189,255,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#cfbdff] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">Autorizar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(73,69,81,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">Rechazar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start justify-center pt-[9.1px] relative size-full">
        <Button6 />
        <Button7 />
      </div>
    </div>
  );
}

function BackgroundVerticalBorder() {
  return (
    <div className="bg-[#2b292f] relative rounded-[16px] shrink-0 w-full" data-name="Background+VerticalBorder">
      <div aria-hidden className="absolute border-[#cfbdff] border-l-4 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6.9px] items-start pl-[20px] pr-[16px] py-[16px] relative size-full">
        <Container120 />
        <Container124 />
        <Container125 />
      </div>
    </div>
  );
}

function Section8ModerationKudos() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(32,31,36,0.4)] col-[1/span_6] justify-self-stretch relative rounded-[24px] row-6 self-start shrink-0" data-name="Section - 8. Moderation Kudos">
      <div aria-hidden className="absolute border border-[rgba(207,189,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[139.5px] pt-[33px] px-[33px] relative size-full">
        <Container119 />
        <BackgroundVerticalBorder />
      </div>
    </div>
  );
}

function Overlay11() {
  return (
    <div className="h-[35.5px] relative shrink-0 w-[38px]" data-name="Overlay">
      <svg className="absolute block inset-0 size-full" fill="none" height="35.5" preserveAspectRatio="none" viewBox="0 0 38 35.5" width="38">
        <g id="Overlay">
          <rect fill="#CFBDFF" fillOpacity="0.2" height="35.5" rx="4" width="38" />
          <path d={svgPaths.p395ebf80} fill="#CFBDFF" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Recetario MINEDUC</p>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Overlay11 />
      <Heading9 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container127 />
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cfbdff] text-[16px] w-full">
        <p className="leading-[24px]">{`Sugerencia: "Frustración Alta"`}</p>
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[14px] w-full">
        <p className="leading-[20px]">Actividad recomendada para hoy:</p>
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container129 />
      <Container130 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="Margin">
      <Container128 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#cfbdff] text-[24px] w-full">
        <p className="leading-[32px]">{`Pausa: "El Espejo"`}</p>
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[14px] w-full">
        <p className="leading-[20px]">Dinámica de 5 min para liberar tensión corporal y reconectar.</p>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-[24px] relative size-full">
        <Heading10 />
        <Container132 />
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667" width="11.6667">
        <g id="Container">
          <path d={svgPaths.p29478120} fill="#CBC4D2" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">5 min</p>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container135 />
      <Container136 />
    </div>
  );
}

function Container137() {
  return (
    <div className="h-[14px] relative shrink-0 w-[11px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 11 14" width="11">
        <g id="Container">
          <path d={svgPaths.p30eba500} fill="#371E72" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#cfbdff] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Button">
      <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[48px] top-1/2" data-name="Button:shadow" />
      <Container137 />
    </div>
  );
}

function Container133() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container134 />
        <Button8 />
      </div>
    </div>
  );
}

function OverlayBorder8() {
  return (
    <div className="bg-[rgba(15,13,19,0.6)] relative rounded-[16px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(73,69,81,0.4)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[21px] relative size-full">
        <Container131 />
        <Container133 />
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pl-[191.03px] pr-[191.05px] relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[14px] text-center whitespace-nowrap">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[20px] underline">Ver todo el recetario</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0" data-name="Button:margin">
      <Button9 />
    </div>
  );
}

function Container126() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Margin5 />
        <Margin6 />
        <OverlayBorder8 />
        <ButtonMargin />
      </div>
    </div>
  );
}

function Section9RecetarioMineduc() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(32,31,36,0.4)] col-[7/span_6] justify-self-stretch relative rounded-[24px] row-6 self-start shrink-0" data-name="Section - 9. Recetario MINEDUC">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[33px] relative size-full">
          <Container126 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(207,189,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Container141() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 22 16" width="22">
        <g id="Container">
          <path d={svgPaths.p378800} fill="#CFBDFF" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Recursos</p>
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container141 />
      <Heading11 />
    </div>
  );
}

function Container143() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[24px] text-center whitespace-nowrap">
          <p className="leading-[32px]">🎯</p>
        </div>
      </div>
    </div>
  );
}

function Container144() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[24px]">Atención</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#201f24] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(73,69,81,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[17px] relative size-full">
        <Container143 />
        <Container144 />
      </div>
    </div>
  );
}

function Container145() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[24px] text-center whitespace-nowrap">
          <p className="leading-[32px]">💬</p>
        </div>
      </div>
    </div>
  );
}

function Container146() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[24px]">Diálogo</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-[#201f24] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(73,69,81,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[17px] relative size-full">
        <Container145 />
        <Container146 />
      </div>
    </div>
  );
}

function Container147() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[24px] text-center whitespace-nowrap">
          <p className="leading-[32px]">🎨</p>
        </div>
      </div>
    </div>
  );
}

function Container148() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[24px]">Creativa</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="bg-[#201f24] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(73,69,81,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[17px] relative size-full">
        <Container147 />
        <Container148 />
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder5 />
      <BackgroundBorder6 />
      <BackgroundBorder7 />
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px pb-[4px] relative" data-name="Container">
      <Container140 />
      <Container142 />
    </div>
  );
}

function Container151() {
  return (
    <div className="h-[22px] relative shrink-0 w-[22.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22.5 22" width="22.5">
        <g id="Container">
          <path d={svgPaths.p39599280} fill="#E7C365" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Tips Rápidos</p>
      </div>
    </div>
  );
}

function Container150() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container151 />
      <Heading12 />
    </div>
  );
}

function Item() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute bg-[#e7c365] left-0 rounded-[12px] size-[6px] top-[10px]" data-name="Background" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] left-[18px] not-italic text-[#cbc4d2] text-[16px] top-[12px] whitespace-nowrap">
          <p className="leading-[24px]">Saluda a cada alumno por su nombre</p>
        </div>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute bg-[#e7c365] left-0 rounded-[12px] size-[6px] top-[10px]" data-name="Background" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] left-[18px] not-italic text-[#cbc4d2] text-[16px] top-[12px] whitespace-nowrap">
          <p className="leading-[24px]">Usa música suave durante actividades</p>
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="bg-[rgba(28,27,32,0.4)] relative rounded-[16px] shrink-0 w-full" data-name="List">
      <div aria-hidden className="absolute border border-[rgba(73,69,81,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[85px] pt-[21px] px-[21px] relative size-full">
        <Item />
        <Item1 />
      </div>
    </div>
  );
}

function Container149() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Container">
      <Container150 />
      <List />
    </div>
  );
}

function Container138() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-start justify-center left-[33px] right-[33px] top-[33px]" data-name="Container">
      <Container139 />
      <Container149 />
    </div>
  );
}

function Section10AdditionalResourcesTips() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(32,31,36,0.4)] col-[1/span_12] h-[232px] justify-self-stretch relative rounded-[24px] row-7 shrink-0" data-name="Section - 10. Additional Resources & Tips">
      <div aria-hidden className="absolute border border-[rgba(207,189,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container138 />
    </div>
  );
}

function BentoGridLayout() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_______187px_439px_248px_274px_260px_396px_232px] relative shrink-0 w-full" data-name="Bento Grid Layout">
      <Section1StatsAndEmotionalTemperature />
      <Section2AnnualSummary />
      <Section3AwardedStudents />
      <Section4DataBasedRecommendations />
      <Section5InterventionStacking />
      <Section6RecommendedVideos />
      <Section7Attendance />
      <Section8ModerationKudos />
      <Section9RecetarioMineduc />
      <Section10AdditionalResourcesTips />
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[1440px] relative shrink-0 w-full" data-name="Main Content Canvas">
      <HeaderSection />
      <BentoGridLayout />
    </div>
  );
}

function Container152() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#cfbdff] text-[40px] tracking-[-2px] whitespace-nowrap">
          <p className="leading-[48px]">Dashboard</p>
        </div>
      </div>
    </div>
  );
}

function Container155() {
  return (
    <div className="absolute bottom-[23.68%] content-stretch flex flex-col items-start left-[12px] top-[23.68%]" data-name="Container">
      <div className="relative shrink-0 size-[10.5px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 10.5 10.5" width="10.5">
          <path d={svgPaths.p210dd580} fill="#CBC4D2" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container156() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[14px] w-full">
          <p className="leading-[normal]">Buscar...</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(54,52,58,0.5)] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[11px] pl-[41px] pr-[17px] pt-[10px] relative size-full">
          <Container156 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(73,69,81,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container154() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container155 />
      <Input />
    </div>
  );
}

function Container153() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[448px] relative shrink-0 w-full" data-name="Container">
      <Container154 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="flex-[1_0_0] max-w-[480px] min-w-px relative" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] px-[16px] relative size-full">
        <Container153 />
      </div>
    </div>
  );
}

function Container159() {
  return (
    <div className="h-[20.8px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20.8" preserveAspectRatio="none" viewBox="0 0 18 20.8" width="18">
        <g id="Container">
          <path d={svgPaths.p2bce8400} fill="#CBC4D2" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container160() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 20 16" width="20">
        <g id="Container">
          <path d={svgPaths.p25224880} fill="#CBC4D2" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container158() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Container159 />
      <Container160 />
    </div>
  );
}

function Container163() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cfbdff] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">Prof. Omar Lobos</p>
      </div>
    </div>
  );
}

function Container164() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[18px]">Tutor 7° Básico A</p>
      </div>
    </div>
  );
}

function Container162() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container163 />
      <Container164 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#6750a4] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e0d2ff] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">OL</p>
      </div>
    </div>
  );
}

function Container161() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Container162 />
      <Background2 />
    </div>
  );
}

function Container157() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container158 />
        <Container161 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(20,19,24,0.6)] content-stretch flex h-[80px] items-center justify-between left-0 pb-px px-[48px] top-0 w-[1576px]" data-name="Header">
      <div aria-hidden className="absolute border-[rgba(73,69,81,0.3)] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container152 />
      <Margin7 />
      <Container157 />
    </div>
  );
}

function Container166() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#cfbdff] text-[24px] tracking-[-1.2px] w-full">
        <p className="leading-[32px]">CONECTA V2 PRO</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e6e1e9] text-[24px] w-full">
        <p className="leading-[32px]">RBD 12412-4</p>
      </div>
    </div>
  );
}

function Container168() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[16px] w-full">
        <p className="leading-[24px]">Colegio Chile Norte</p>
      </div>
    </div>
  );
}

function Container167() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container168 />
    </div>
  );
}

function Container165() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[64px] items-start px-[8px] relative size-full">
        <Container166 />
        <Container167 />
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <Container165 />
      </div>
    </div>
  );
}

function Container169() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p186f5ba0} fill="#E0D2FF" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container170() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e0d2ff] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Dashboard</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="flex h-[43.12px] items-center justify-center relative shrink-0 w-[249.9px]">
      <div className="flex-none scale-x-98 scale-y-98">
        <div className="bg-[#6750a4] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[8px] w-[255px]" data-name="Link">
          <Container169 />
          <Container170 />
        </div>
      </div>
    </div>
  );
}

function Container173() {
  return (
    <div className="h-[20px] relative shrink-0 w-[19.012px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 19.0118 20" width="19.0118">
        <g id="Container">
          <path d={svgPaths.p1f8cb380} fill="#CBC4D2" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container174() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Emociones</p>
      </div>
    </div>
  );
}

function Container172() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Container173 />
      <Container174 />
    </div>
  );
}

function Container175() {
  return (
    <div className="h-[4.317px] relative shrink-0 w-[7px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="4.31667" preserveAspectRatio="none" viewBox="0 0 7 4.31667" width="7">
        <g id="Container">
          <path d={svgPaths.p1a9c9340} fill="#CBC4D2" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
          <Container172 />
          <Container175 />
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[rgba(54,52,58,0.5)] relative rounded-[4px] shrink-0 w-full" data-name="Link">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#cfbdff] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">7°A</p>
        </div>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[14px] w-full">
          <p className="leading-[20px]">8°B</p>
        </div>
      </div>
    </div>
  );
}

function Container176() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[40px] pr-[16px] relative size-full">
        <Link1 />
        <Link2 />
      </div>
    </div>
  );
}

function Container171() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Button10 />
      <Container176 />
    </div>
  );
}

function Container178() {
  return (
    <div className="h-[21px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 16 21" width="16">
        <g id="Container">
          <path d={svgPaths.p1c671000} fill="#CBC4D2" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container179() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Kudos</p>
      </div>
    </div>
  );
}

function Container177() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Container178 />
      <Container179 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#ffb4ab] content-stretch flex items-center justify-center pb-[3px] pt-[2px] relative rounded-[12px] shrink-0 size-[20px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#690005] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[15px]">4</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
          <Container177 />
          <Background3 />
        </div>
      </div>
    </div>
  );
}

function Container180() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="Container">
          <path d={svgPaths.p11c2d500} fill="#CBC4D2" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container181() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Chat Estrella</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Container180 />
          <Container181 />
        </div>
      </div>
    </div>
  );
}

function Container182() {
  return (
    <div className="h-[20px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 15 20" width="15">
        <g id="Container">
          <path d={svgPaths.pb720300} fill="#CBC4D2" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container183() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cbc4d2] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Caja de Ideas</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Container182 />
          <Container183 />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Nav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Link />
        <Container171 />
        <Link3 />
        <Link4 />
        <Link5 />
      </div>
    </div>
  );
}

function Container184() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p3e9df400} fill="#FFB4AB" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container185() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffb4ab] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Cerrar Sesión</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Container184 />
          <Container185 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(73,69,81,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17px] relative size-full">
        <Link6 />
      </div>
    </div>
  );
}

function Aside() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(15,13,19,0.8)] content-stretch flex flex-col h-[985px] items-start justify-between left-0 pb-[16px] pl-[16px] pr-[17px] pt-[32px] top-0 w-[288px]" data-name="Aside">
      <div aria-hidden className="absolute border-[rgba(73,69,81,0.2)] border-r border-solid inset-0 pointer-events-none" />
      <Margin8 />
      <Nav />
      <HorizontalBorder1 />
    </div>
  );
}

export default function PanelDocenteIntegracionFinalEstandarizadaV() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[48px] pl-[336px] pr-[48px] pt-[96px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(20, 19, 24) 0%, rgb(20, 19, 24) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Panel Docente - Integración Final Estandarizada v2">
      <MainContentCanvas />
      <Header />
      <Aside />
    </div>
  );
}