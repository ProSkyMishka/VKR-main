import SwiftUI

struct ContentView: View {
    @State private var rot = false
    var body: some View {
        VStack {
            Text("asp003-spin")
                .rotationEffect(.degrees(rot ? 90 : 0))
                .animation(.spring(), value: rot)
            Button("asp003-bounce") { rot.toggle() }
        }
        .padding()
    }
}
