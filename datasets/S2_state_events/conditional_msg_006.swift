import SwiftUI

struct ContentView: View {
    @State private var shown = false

    var body: some View {
        VStack {
            Button("cm006-show") { shown = true }
            if shown {
                Text("cm006-message")
                    .font(.headline)
                    .foregroundColor(.green)
            } else {
                Text("cm006-empty")
                    .foregroundColor(.gray)
            }
        }
        .padding()
    }
}
