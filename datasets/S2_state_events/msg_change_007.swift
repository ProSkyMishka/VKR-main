import SwiftUI

struct ContentView: View {
    @State private var msg = "mch007-initial"

    var body: some View {
        VStack {
            Text(msg)
                .font(.headline)
            Button("mch007-change") { msg = "mch007-changed" }
        }
        .padding()
    }
}
