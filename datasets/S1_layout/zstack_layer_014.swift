import SwiftUI

struct ContentView: View {
    var body: some View {
        ZStack {
            Color.gray
                .opacity(0.2)
                .cornerRadius(18)
                .frame(width: 134, height: 74)
            VStack(spacing: 4) {
                Text("zl014-back")
                    .font(.caption)
                Text("zl014-front")
                    .font(.headline)
                    .bold()
            }
        }
        .padding()
    }
}
