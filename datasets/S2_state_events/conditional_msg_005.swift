import SwiftUI

struct ContentView: View {
    @State private var shown = false

    var body: some View {
        VStack {
            Button("cm005-show") { shown = true }
            if shown {
                Text("cm005-message")
                    .font(.headline)
                    .foregroundColor(.green)
            } else {
                Text("cm005-empty")
                    .foregroundColor(.gray)
            }
        }
        .padding()
    }
}
