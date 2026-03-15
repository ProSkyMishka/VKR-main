import SwiftUI

struct ContentView: View {
    @State private var scaled = false

    var body: some View {
        VStack {
            Text("Scale")
                .scaleEffect(scaled ? 1.5 : 1.0)
                .animation(.spring(), value: scaled)
            Button("Toggle") {
                scaled.toggle()
            }
        }
    }
}
