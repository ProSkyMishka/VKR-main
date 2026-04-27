import SwiftUI

struct ContentView: View {
    @State private var on = false
    var body: some View {
        VStack {
            Text("ao001-fade")
                .opacity(on ? 1 : 0)
                .animation(.easeInOut, value: on)
            Button("ao001-toggle") { on.toggle() }
        }
        .padding()
    }
}
