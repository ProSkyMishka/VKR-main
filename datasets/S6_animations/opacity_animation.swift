import SwiftUI

struct ContentView: View {
    @State private var show = false

    var body: some View {
        VStack {
            Text("Fade")
                .opacity(show ? 1 : 0)
                .animation(.easeInOut, value: show)
            Button("Toggle") {
                show.toggle()
            }
        }
    }
}
