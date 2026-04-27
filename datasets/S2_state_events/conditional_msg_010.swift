import SwiftUI

struct ContentView: View {
    @State private var shown = false

    var body: some View {
        VStack {
            Button("cm010-show") { shown = true }
            if shown {
                Text("cm010-message")
                    .font(.headline)
                    .foregroundColor(.green)
            } else {
                Text("cm010-empty")
                    .foregroundColor(.gray)
            }
        }
        .padding()
    }
}
