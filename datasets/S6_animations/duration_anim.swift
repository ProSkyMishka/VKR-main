import SwiftUI
struct ContentView: View {
    @State private var opacity: Double = 0.5
    var body: some View {
        Text("Duration")
            .opacity(opacity)
            .animation(.easeInOut(duration: 0.5), value: opacity)
        Button("Change") { opacity = opacity == 0.5 ? 1 : 0.5 }
    }
}
