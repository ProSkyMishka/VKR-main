import SwiftUI

struct ContentView: View {
    @State private var msg = "mch011-initial"

    var body: some View {
        VStack {
            Text(msg)
                .font(.headline)
            Button("mch011-change") { msg = "mch011-changed" }
        }
        .padding()
    }
}
