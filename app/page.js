"use client";
import React from "react";

const TailwindCSSExplanation = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Einführung in TailwindCSS</h1>
      <p className="mb-4">
        TailwindCSS ist ein CSS-Framework, das viele vorgefertigte Klassen
        enthält, die Sie auf Ihre HTML-Elemente anwenden können, um Ihr Design
        zu erstellen.
      </p>
      <h2 className="text-lg font-semibold mb-2">Farben</h2>
      <div className="flex items-center space-x-3">
        <div className="bg-blue-500 h-16 w-16 rounded-lg shadow-md mb-4 animate-bounce"></div>
        <div className="bg-yellow-500 h-16 w-16 rounded-lg shadow-md mb-4 animate-ping"></div>
        <div className="bg-green-500 h-16 w-16 rounded-lg shadow-md mb-4 animate-spin"></div>
        <div className="bg-red-500 h-16 w-16 rounded-lg shadow-md mb-4 hover:opacity-80"></div>
      </div>
      <p className="mb-4">
        Mit den Farbklassen können Sie die Hintergrundfarbe, Textfarbe und den
        Rand eines Elements ändern. Die Farben sind nach Graustufen und
        Brandfarben sortiert. In diesem Beispiel haben wir die Klasse
        "bg-gray-500" verwendet, um den Hintergrund eines Div-Elements in Grau
        zu ändern.
      </p>
      <h2 className="text-lg font-semibold mb-2">Abstände</h2>
      <div className="h-16"></div>
      <p className="mb-4">
        Die Abstandsklassen können verwendet werden, um den Abstand zwischen
        Elementen zu ändern oder um ein Element zu zentrieren. In diesem
        Beispiel haben wir die Klasse "h-16" verwendet, um die Höhe eines
        Div-Elements auf 16 Pixel zu setzen. Dadurch wird der Abstand zwischen
        diesem Element und den anderen Elementen größer.
      </p>
      <h2 className="text-lg font-semibold mb-2">Typografie</h2>
      <p className="text-3xl font-bold mb-2">Überschrift</p>
      <p className="text-gray-500 mb-4">Text</p>
      <p className="mb-4">
        Mit den Typografieklassen können Sie die Schriftgröße, die Schriftart,
        die Schriftfarbe und andere Textattribute ändern. In diesem Beispiel
        haben wir die Klassen "text-3xl" und "text-gray-500" verwendet, um die
        Schriftgröße der Überschrift auf 3xl und die Farbe des Texts auf Grau zu
        setzen.
      </p>
      <h2 className="text-lg font-semibold mb-2">Flexbox</h2>
      <div className="flex justify-center items-center h-16 w-16 bg-gray-500 rounded-lg mb-4">
        <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
      </div>
      <p className="mb-4">
        Mit den Flexbox-Klassen können Sie Elemente innerhalb eines Containers
        anordnen und ausrichten. In diesem Beispiel haben wir die Klassen
        "flex", "justify-center", "items-center", "h-16" und "w-16" verwendet,
        um einen Container mit einer Höhe und Breite von 16 Pixeln zu erstellen
        und die darin enthaltenen Elemente horizontal und vertikal auszurichten.
      </p>
      <h2 className="text-lg font-semibold mb-2">Responsives Design</h2>
      <div className="flex flex-col md:flex-row mb-4">
        <div className="bg-gray-500 h-16 w-full md:w-1/2 rounded-lg shadow-md md:mr-4"></div>
        <div className="bg-gray-500 h-16 w-full md:w-1/2 rounded-lg shadow-md"></div>
      </div>
      <p className="mb-4">
        TailwindCSS enthält auch Klassen für responsives Design, die Ihnen
        helfen, Ihre Anwendung für verschiedene Bildschirmgrößen zu optimieren.
        In diesem Beispiel haben wir die Klassen "flex", "flex-col",
        "md:flex-row", "w-full" und "md:w-1/2" verwendet, um zwei Div-Elemente
        nebeneinander anzuzeigen, wenn der Bildschirm breiter als ein bestimmter
        Schwellenwert ist.
      </p>
      <h2 className="text-lg font-semibold mb-2">Weitere Klassen</h2>
      <div className="border-2 border-gray-500 rounded-lg p-4 mb-4">
        <p className="mb-2">
          TailwindCSS enthält viele weitere Klassen, z. B. für:
        </p>
        <ul className="list-disc pl-4">
          <li>Box Shadow</li>
          <li>Transitions</li>
          <li>Animations</li>
          <li>Layouts</li>
          <li>und vieles mehr</li>
        </ul>
      </div>
      <p className="mb-4">
        Es gibt viele weitere Klassen in TailwindCSS, die Sie verwenden können,
        um Ihre Anwendung zu gestalten. Sie können die offizielle
        TailwindCSS-Dokumentation besuchen, um mehr über die verfügbaren Klassen
        und ihre Verwendung zu erfahren.
      </p>
    </div>
  );
};

export default TailwindCSSExplanation;
