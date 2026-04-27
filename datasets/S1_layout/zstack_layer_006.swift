import SwiftUI

struct ContentView: View {
    var body: some View {
        ZStack {
            Color.gray
                .opacity(0.2)
                .cornerRadius(10)
                .frame(width: 126, height: 66)
            VStack(spacing: 4) {
                Text("zl006-back")
                    .font(.caption)
                Text("zl006-front")
                    .font(.headline)
                    .bold()
            }
        }
        .padding()
    }
}
