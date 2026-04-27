import SwiftUI

struct ContentView: View {
    @State private var rot = false
    var body: some View {
        VStack {
            Text("asp002-spin")
                .rotationEffect(.degrees(rot ? 90 : 0))
                .animation(.spring(), value: rot)
            Button("asp002-bounce") { rot.toggle() }
        }
        .padding()
    }
}
