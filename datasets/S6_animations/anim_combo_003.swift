import SwiftUI

struct ContentView: View {
    @State private var on = false
    var body: some View {
        VStack {
            Text("ac003-combo")
                .opacity(on ? 1 : 0.4)
                .scaleEffect(on ? 1.2 : 1)
                .animation(.easeInOut, value: on)
            Button("ac003-switch") { on.toggle() }
        }
        .padding()
    }
}
