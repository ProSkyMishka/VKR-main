import SwiftUI

struct ContentView: View {
    @State private var on = false
    var body: some View {
        VStack {
            Text("ao002-fade")
                .opacity(on ? 1 : 0)
                .animation(.easeInOut, value: on)
            Button("ao002-toggle") { on.toggle() }
        }
        .padding()
    }
}
