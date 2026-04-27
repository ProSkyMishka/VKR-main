import SwiftUI

struct ContentView: View {
    @State private var shown = false

    var body: some View {
        VStack {
            Button("cm002-show") { shown = true }
            if shown {
                Text("cm002-message")
                    .font(.headline)
                    .foregroundColor(.green)
            } else {
                Text("cm002-empty")
                    .foregroundColor(.gray)
            }
        }
        .padding()
    }
}
