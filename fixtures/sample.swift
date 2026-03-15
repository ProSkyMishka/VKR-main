import SwiftUI

struct ContentView: View {
    @State private var count = 0
    var body: some View {
        VStack(spacing: 12) {
            Text("Hello, SwiftUI!")
            Button("Count: \(count)") {
                count += 1
            }
        }
        .padding()
    }
}
