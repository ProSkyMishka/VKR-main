import SwiftUI

struct ContentView: View {
    @State private var step = 1

    var body: some View {
        VStack(spacing: 10) {
            Text("wz010-step: \(step)").font(.headline)
            if step == 1 { Text("wz010-intro") }
            if step == 2 { Text("wz010-second") }
            if step == 3 { Text("wz010-finish") }
            HStack {
                Button("wz010-back") { if step > 1 { step -= 1 } }
                Button("wz010-next") { if step < 3 { step += 1 } }
            }
        }
        .padding()
    }
}
