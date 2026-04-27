import SwiftUI

struct ContentView: View {
    @State private var on = false
    var body: some View {
        VStack {
            Text("ao011-fade")
                .opacity(on ? 1 : 0)
                .animation(.easeInOut, value: on)
            Button("ao011-toggle") { on.toggle() }
        }
        .padding()
    }
}
