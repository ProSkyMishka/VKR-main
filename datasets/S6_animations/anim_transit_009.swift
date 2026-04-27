import SwiftUI

struct ContentView: View {
    @State private var show = false
    var body: some View {
        VStack {
            if show {
                Text("at009-now")
                    .transition(.opacity)
            }
            Button("at009-toggle") {
                withAnimation { show.toggle() }
            }
        }
        .padding()
    }
}
