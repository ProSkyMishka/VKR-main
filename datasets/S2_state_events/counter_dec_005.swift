import SwiftUI

struct ContentView: View {
    @State private var n = 10

    var body: some View {
        VStack {
            Text("cd005-n: \(n)")
            Button("cd005-dec") { n -= 2 }
        }
        .padding()
    }
}
