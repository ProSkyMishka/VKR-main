import SwiftUI

struct ContentView: View {
    @State private var msg = "mch013-initial"

    var body: some View {
        VStack {
            Text(msg)
                .font(.headline)
            Button("mch013-change") { msg = "mch013-changed" }
        }
        .padding()
    }
}
