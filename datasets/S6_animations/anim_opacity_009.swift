import SwiftUI

struct ContentView: View {
    @State private var on = false
    var body: some View {
        VStack {
            Text("ao009-fade")
                .opacity(on ? 1 : 0)
                .animation(.easeInOut, value: on)
            Button("ao009-toggle") { on.toggle() }
        }
        .padding()
    }
}
