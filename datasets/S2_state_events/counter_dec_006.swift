import SwiftUI

struct ContentView: View {
    @State private var n = 11

    var body: some View {
        VStack {
            Text("cd006-n: \(n)")
            Button("cd006-dec") { n -= 3 }
        }
        .padding()
    }
}
