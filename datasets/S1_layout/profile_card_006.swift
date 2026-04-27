import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 10) {
            Image(systemName: "person.crop.circle.fill")
                .font(.system(size: 72))
                .foregroundColor(.blue)
            VStack(spacing: 2) {
                Text("pc006-name")
                    .font(.title2)
                    .bold()
                Text("pc006-handle")
                    .font(.caption)
                    .foregroundColor(.gray)
            }
            Text("pc006-bio short")
                .font(.subheadline)
                .multilineTextAlignment(.center)
                .padding(.horizontal)
            HStack(spacing: 24) {
                VStack { Text("pc006-posts"); Text("\(16)").bold() }
                VStack { Text("pc006-followers"); Text("\(106)").bold() }
                VStack { Text("pc006-likes"); Text("\(1006)").bold() }
            }
        }
        .padding()
    }
}
