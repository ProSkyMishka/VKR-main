import SwiftUI

struct ContentView: View {
    var body: some View {
        ZStack {
            Color.gray
                .opacity(0.2)
                .cornerRadius(14)
                .frame(width: 130, height: 70)
            VStack(spacing: 4) {
                Text("zl010-back")
                    .font(.caption)
                Text("zl010-front")
                    .font(.headline)
                    .bold()
            }
        }
        .padding()
    }
}
