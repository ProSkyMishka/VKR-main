import SwiftUI

struct ContentView: View {
    @State private var shown = false

    var body: some View {
        VStack {
            Button("cm009-show") { shown = true }
            if shown {
                Text("cm009-message")
                    .font(.headline)
                    .foregroundColor(.green)
            } else {
                Text("cm009-empty")
                    .foregroundColor(.gray)
            }
        }
        .padding()
    }
}
