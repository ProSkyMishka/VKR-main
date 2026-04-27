import SwiftUI

struct ContentView: View {
    @State private var step = 1

    var body: some View {
        VStack(spacing: 10) {
            Text("wz005-step: \(step)").font(.headline)
            if step == 1 { Text("wz005-intro") }
            if step == 2 { Text("wz005-second") }
            if step == 3 { Text("wz005-finish") }
            HStack {
                Button("wz005-back") { if step > 1 { step -= 1 } }
                Button("wz005-next") { if step < 3 { step += 1 } }
            }
        }
        .padding()
    }
}
