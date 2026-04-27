import SwiftUI

struct ContentView: View {
    @State private var show = false
    var body: some View {
        VStack {
            if show {
                Text("at010-now")
                    .transition(.opacity)
            }
            Button("at010-toggle") {
                withAnimation { show.toggle() }
            }
        }
        .padding()
    }
}
