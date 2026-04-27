import SwiftUI

struct ContentView: View {
    @State private var down = false
    var body: some View {
        VStack {
            Text("asy001-drop")
                .offset(y: down ? 60 : 0)
                .animation(.easeInOut, value: down)
            Button("asy001-fall") { down.toggle() }
        }
        .padding()
    }
}
