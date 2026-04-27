import SwiftUI

struct ContentView: View {
    @State private var shown = false

    var body: some View {
        VStack {
            Button("cm007-show") { shown = true }
            if shown {
                Text("cm007-message")
                    .font(.headline)
                    .foregroundColor(.green)
            } else {
                Text("cm007-empty")
                    .foregroundColor(.gray)
            }
        }
        .padding()
    }
}
