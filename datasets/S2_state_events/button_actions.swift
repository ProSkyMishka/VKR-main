import SwiftUI

struct ContentView: View {
    @State private var message = "Tap a button"

    var body: some View {
        VStack(spacing: 16) {
            Text(message)
            Button("Action A") {
                message = "A"
            }
            Button("Action B") {
                message = "B"
            }
        }
    }
}
