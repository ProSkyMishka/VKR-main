import SwiftUI

struct ContentView: View {
    @State private var on = false
    var body: some View {
        VStack {
            Text("ach008-multi")
                .opacity(on ? 1 : 0.5)
                .scaleEffect(on ? 1.3 : 1)
                .offset(x: on ? 30 : 0, y: on ? -10 : 0)
                .rotationEffect(.degrees(on ? 15 : 0))
                .animation(.easeInOut(duration: 0.4), value: on)
            Button("ach008-trigger") { on.toggle() }
        }
        .padding()
    }
}
