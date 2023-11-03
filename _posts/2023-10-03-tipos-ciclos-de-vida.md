---
layout: post
title:  Tipos de ciclo de vida y sus razonamientos
date:   2023-10-03 18:30:26 +0000
categories: jekyll update
author: Borja Medina Ramos
---

## Introducción

**Ciclo de Vida de Desarrollo de Sistemas (SDLC)**

El SDLC es un marco para planificar, construir y desplegar sistemas de información, aplicable a hardware y software. Las etapas clave son:

1. **Estudio de Viabilidad**: Evaluación de recursos y ROI antes de iniciar el desarrollo.
2. **Requisitos**: Captura y documentación de lo que el sistema debe hacer.
3. **Diseño**: Exploración de soluciones y elaboración del diseño.
4. **Desarrollo**: Creación de componentes técnicos (hardware y software).
5. **Pruebas**: Verificación de que los componentes funcionen correctamente.
6. **Implementación**: Transición del sistema al entorno operativo.

El SDLC también abarca procesos, roles, herramientas y técnicas específicas. 

**Elementos Clave en el Desarrollo de Sistemas**

1. **Contexto**: Antes de iniciar el desarrollo, es fundamental considerar el contexto, que incluye factores como la entrega del sistema, habilidades del equipo, ubicación y requisitos de auditoría.

2. **Ciclo de Vida**: El ciclo de vida describe las etapas típicas de planificación, diseño, construcción, pruebas y entrega de sistemas de información, que pueden ser lineales o iterativas.

3. **Procesos**: Los procesos son conjuntos de acciones que producen resultados específicos. Es importante estructurar, planificar y controlar los procesos en torno a las etapas del ciclo de vida.

4. **Roles**: Para avanzar en el ciclo de vida, se requieren roles específicos, como analistas de negocios, desarrolladores y administradores.

5. **Entregables**: Estos incluyen documentos, modelos, diseños y componentes necesarios en diversas etapas del ciclo de vida, variando según el ciclo y el proceso.

6. **Técnicas**: Existen diversas técnicas que pueden utilizarse durante el desarrollo, dependiendo de las preferencias del equipo, el ciclo y el enfoque del desarrollo.

**TABLA COMPARATIVA ENTRE CICLOS DE VIDA LINEALES Y EVOLUTIVOS**

| Aspecto                    | Enfoque Lineal                                    | Enfoque Evolutivo                               |
| -------------------------- | ------------------------------------------------- | --------------------------------------------- |
| **Estructura**             | Divide el problema en etapas distintas, con un propósito claro. | Progresa mediante la entrega de prototipos tempranos o iteraciones. |
| **Acuerdo Temprano**       | Requiere que todo sea acordado por adelantado sin necesidad de revisiones posteriores. | Se adapta a requisitos cambiantes, inciertos o complejos. |
| **Control de Costos y Alcance** | Ayuda a controlar costos y el alcance, lo que lo hace adecuado para sistemas complejos y desarrollo distribuido. | Puede resultar en un aumento de los costos debido a la integración y pruebas adicionales. |
| **Dificultades con Cambios** | No se lleva bien con cambios en los requisitos, ya que es difícil o imposible regresar y cambiar etapas previas. | Adaptable a cambios en los requisitos, ya que permite refinamiento posterior. |
| **Valor Temprano**          | El valor del cliente no está disponible hasta el final del ciclo. | Entrega temprana de valor al cliente, ya sea en forma de versiones funcionales o conocimiento sobre riesgos del proyecto. |
| **Manejo del Riesgo**       | No es efectivo para gestionar riesgos. | Ideal para proyectos de innovación, productos nuevos, o proyectos de alto riesgo, ya que puede detenerse sin incurrir en grandes costos. |
| **Colaboración del Cliente** | Menos colaboración con el cliente durante el proceso. | Fomenta la colaboración constante con el cliente, lo que aumenta el compromiso del cliente. |

### Ciclos de vida lineales

**Ciclo de Vida en Cascada (Waterfall):**
- Enfoque secuencial con etapas bien definidas.
- Cada etapa debe completarse antes de pasar a la siguiente.
- Adecuado para sistemas con requisitos claros que no cambian.
- Vulnerable a cambios en los requisitos después de la etapa de requisitos.
- La entrega de software funcional se realiza al final.

**Modelo en V ('V' Model):**
- Extensión del modelo en cascada.
- Divide el ciclo en etapas de definición y verificación/validación.
- Se enfoca en la calidad y la seguridad, adecuado para sistemas críticos.
- Permite una mejor gestión de proyectos y control.
- Costoso para sistemas más simples y cambios en los requisitos.

**Ciclo de Vida Incremental:**
- Comienza de manera secuencial pero permite la entrega de partes del sistema antes que otras.
- Ideal para entregar funcionalidades temprano en el proceso.
- Adecuado cuando la arquitectura básica del sistema es estable.
- Reduce el tiempo de espera del cliente, pero puede aumentar los costos debido a múltiples entregas.

### Ciclos de vida evolutivos

**Ciclos de Vida Basados en el Enfoque Evolutivo:**
- Los enfoques evolutivos existen desde la década de 1980 y son la base de enfoques más populares como "Agile".
- Los dos ciclos de vida fundamentales son: Iterativo y Espiral.

**Desarrollo Iterativo:**
- El proyecto global se divide en varias iteraciones o desarrollos a corto plazo.
- Cada iteración es un mini proyecto independiente que incluye actividades como requerimientos, análisis, diseño, desarrollo y pruebas.
- Las iteraciones evolucionan los requerimientos y entregan un sistema funcional que aporta valor.
- Adecuado cuando los problemas o soluciones no son claros desde el principio.

**Spiral (Espiral):**
- Combina el desarrollo iterativo con prototipado para abordar riesgos y evolucionar los requerimientos.
- No requiere definición previa de requerimientos.
- Se inicia con un concepto y pasa por cuatro fases: determinar objetivos, identificar y resolver riesgos, desarrollo y pruebas, y planificación de la siguiente iteración.
- Adecuado para proyectos con riesgos significativos y requerimientos cambiantes.

* Ambos enfoques evolutivos promueven la colaboración con los usuarios, permiten la evolución de requerimientos y entregan sistemas operativos temprano en el ciclo de desarrollo. Sin embargo, también pueden resultar en un aumento de los costos y riesgos si no se gestionan adecuadamente.

## Metodologías Ágiles

 **SCRUM**
 - Scrum es probablemente uno de los enfoques ágiles más conocidos y utilizados en la actualidad, y fue publicado por primera vez en 1995 por Ken Schwaber y Jeff Sutherland. Scrum es un proceso Iterativo e Incremental que sigue un enfoque evolutivo para el desarrollo de sistemas de software. Introduce un lenguaje y conceptos únicos que gobiernan cómo se planifica y supervisa el trabajo por un pequeño equipo de ingenieros de software multidisciplinarios. Scrum propone únicamente tres roles, que son:

 * Product Owner: Representa al negocio y es la voz del cliente.
 * Equipo de Desarrollo: Equipo autoorganizado y multifuncional de 5-9 individuos que entregan el software funcional.
 * Scrum Master: Persona responsable de eliminar obstáculos para que el equipo de desarrollo pueda alcanzar los objetivos.

 **Proceso Unificado de Rational 1998**
  - El Proceso Unificado de Rational (RUP), desarrollado originalmente en 1998 por Rational Software (ahora IBM), es un proceso de ingeniería de software. Es un proceso iterativo e incremental impulsado por el riesgo, construido sobre los cimientos del modelo en espiral, que asigna y gestiona tareas y responsabilidades de manera disciplinada dentro de una organización de desarrollo. RUP también es un marco de proceso que se puede adaptar y ajustar para satisfacer las necesidades de la organización o el equipo del proyecto. RUP consta de cuatro fases principales, que son Inicio, Elaboración, Construcción y Transición, así como seis flujos de trabajo de ingeniería principales, que son: modelado de negocios, requisitos, análisis y diseño, implementación, prueba y despliegue.

 **Desarrollo de Software Lean**
  - Tiene sus raíces en la fabricación lean, pionera de Toyota. Se trata de un conjunto de técnicas y herramientas que se pueden aplicar para eliminar desperdicios en la fabricación y, por lo tanto, mejorar la productividad. El Desarrollo de Software Lean fue introducido por Mary y Tom Poppendieck en su libro "Lean software development: an Agile toolkit" (2003) y traduce la fabricación lean en principios de desarrollo de software.

  - Principios:
    * Enfoque en los clientes.
    * Energizar a los trabajadores.
    * Eliminar desperdicios.
    * Aprender rápido.
    * Entregar rápido.
    * Construir calidad desde el principio.
    * Seguir mejorando.
    * Optimizar el conjunto.
![metodologias-agiles](https://viewnext.usal.es/sites/default/files/VALORES%20AGILES.png)
